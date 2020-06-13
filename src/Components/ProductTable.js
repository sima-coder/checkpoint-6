import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ProductTable = (props) => {
    return (
      <div>
          <h1 style={{color: "blue", textAlign: "center", marginTop:"50px"}}>Table of products</h1>
          <table style={{borderCollapse: "collapse", width: "50%", margin: "50px auto",}}>
              <tr>
                    <th style={{fontSize: "1.5em", color: "darkblue", backgroundColor: "lightblue"}}>name</th>
                    <th style={{fontSize: "1.5em", color: "darkblue", backgroundColor: "lightblue"}}>price</th>
                    <th style={{fontSize: "1.5em", color: "darkblue", backgroundColor: "lightblue"}}>category</th>
              </tr>
              {props.products.map(item=>{
                  return(
                      <tr>
                          <td style={{borderBottom:"1px solid #555", padding:"10px 0 10px 80px"}}>{item.name}</td>
                          <td style={{borderBottom:"1px solid #555", padding:"10px 0 10px 60px"}}>{item.price}</td>
                          <td style={{borderBottom:"1px solid #555", padding:"10px 0 10px 80px"}}>{item.category}</td>
                      </tr>
                  )
              })}
          </table>
      </div>
    );
  }
  
  ProductTable.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
  }

export default ProductTable;