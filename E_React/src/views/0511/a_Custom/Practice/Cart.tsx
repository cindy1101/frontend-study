import React, { useCallback, useState } from 'react'
// ! 장바구니 로직 구현

// & 기능 정리
// : 상품 추가, 상품 수정, 상품 제거

// & 상품 구성
// : 상품 고유 번호 (id), 상품 이름 (name), 상품 가격 (price), 상품 갯수(quantity)

// * 상품 타입 명시
type CartItemType = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// * 장바구니 로직을 구현하는 커스텀 훅
const useCart = () => { 
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    const addItem = useCallback((item: CartItemType) => {
        // 해당 장바구니 내에 해당 아이템이 존재하는 경우 수량만 증가시킨다.
        setCartItems(prevItems => {
            const existingItem = prevItems.find(prevItem => prevItem.id === item.id);
            if (existingItem) {
              return prevItems.map(prevItem =>
                prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
              );
            } else {
              return [...prevItems, { ...item, quantity: 1 }];
            }
          });
    }, []);

    const updateItemQuantity = useCallback((id: number, quantity: number) => {
        setCartItems(prevItems =>
          prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
        );
      }, []);

    const removeItem = useCallback((id: number) => {
        // id를 받아서 제거
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      }, []);
    

    return {cartItems, addItem, updateItemQuantity, removeItem};
}

export default function Cart() {

    // * 사용자 정의 장바구니 로직 가져오기
    // : 구조 분해 할당
    const { cartItems, addItem, updateItemQuantity, removeItem } = useCart();

    // * 수정을 위한 input 상태 관리 (name, price)
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newItem: CartItemType = {
          id: Date.now(),
          name: name,
          price: Number(price),
          quantity: 1
        };
        addItem(newItem);
        setName('');
        setPrice('');
      };

    return (
        <div>
            <form onSubmit={handleAddItem}>
                {/* 상품 이름과 가격을 입력 받아서 제품을 추가 */}
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Item Name" required />
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required />
                <button type="submit">Add Item</button>
            </form>

            {/* 장바구니 데이터 출력 */}
            <ul>
                {/* 아이템 이름 - 아이템 가격 - 아이템 수량 */}
                {cartItems.map(item => (
                <li key={item.id}>
                    {item.name} - ${item.price} (x{item.quantity})
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Increase</button>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>Decrease</button>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </li>
                ))}
            </ul>
        </div>
    )
}
