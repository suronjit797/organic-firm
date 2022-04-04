import React from 'react';

const Blog = ({item}) => {
    return (
        <div className='mb-5'>
            <h2> {item.question}? </h2>
            <p> {item.answer} </p>

            {
                item.tags.map((tag, ind)=> (
                <small className='text-primary pointer' key={ind}> <span className='ms-2'>#{tag},</span> </small>
                ))
            }
        </div>
    );
};

export default Blog;