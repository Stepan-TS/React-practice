import React, { useState } from 'react';
import { Product } from './Product';

function ApiServise() {
    const [posts, setPosts] = useState<Product[]>([]);
    const fetchPost = async () => {
        const response = await fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu');
        const data = await response.json();
        setPosts(data);
        
    }

    return (
        <div className='box'>
            <div>
                <h1>Fetch data with typescript</h1>
                <button onClick={fetchPost} className="btn btn-primary">Show data</button>
            </div>
            {posts.map(pro => {
                return (
                    <div key={pro.id}>
                        <p>{pro.title}</p>
                        <p>{pro.name}</p>
                        <img src={pro.pictures[0]} alt="" />
                        <p>{pro.address}</p>
                        <p>{pro.updatedAt}</p>
                    </div> 
                )
            })}
        </div>
    )
}

export default ApiServise;