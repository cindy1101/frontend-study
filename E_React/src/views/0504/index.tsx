import React from 'react'
import UseMemo01 from './a_useMemo/UseMemo01'
import UseMemo04 from './a_useMemo/UseMemo04'
import UseMemo03 from './a_useMemo/UseMemo03'
import UseMemo02 from './a_useMemo/UseMemo02'
import UseCallback01 from './b_useCallback/UseCallback01'
import Usecallback02 from './b_useCallback/Usecallback02'
import Todo from './c_practice/Todo'

export default function index() {
  return (
    <div>
        <h1 style={{backgroundColor: 'pink'}}>0504 수업 자료</h1>
        <h2>1. useMemo</h2>
        <UseMemo01/>
        <UseMemo02/>
        <UseMemo03/>
        <UseMemo04/>
        <h2>2. useCallback</h2>
        <UseCallback01/>
        <Usecallback02/>
        <h2>3. Practice</h2>
        <Todo/>
    </div>
  )
}
