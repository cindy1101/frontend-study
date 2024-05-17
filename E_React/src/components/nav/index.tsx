import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <>
        <div style={{margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            
            <Link to="/" style={{marginRight: '10px'}}>HOME</Link>
            
        </div>

        <div style={{margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            
            <Link to="/0413" style={{marginRight: '10px'}}>0413</Link>
            
        </div>

        <div style={{margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            
            <Link to="/0414" style={{marginRight: '10px'}}>0414</Link>
            
        </div>

        <div style={{margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            
            <Link to="/0420" style={{marginRight: '10px'}}>0420</Link>
            
        </div>

        <div style={{margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            
            <Link to="/0421" style={{marginRight: '10px'}}>0421</Link>
            
        </div>

        <div style={{margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            
            <Link to="/0427" style={{marginRight: '10px'}}>0427</Link>
            
        </div>

        <div style={{margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            
            <Link to="/0428" style={{marginRight: '10px'}}>0428</Link>
            
        </div>
    </>
  )
}
