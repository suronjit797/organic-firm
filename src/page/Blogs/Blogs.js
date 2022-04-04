import React, { useEffect, useState } from 'react';
import Blog from '../../components/Blog/Blog';

const Blogs = () => {
    // dynamic title
    document.title = 'Organic Farm || Blogs'

    const [blogs, setBloges] = useState([])
    const [searchBlogs, setSearchBlogs] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBloges(data))
    }, [])

    useEffect(() => {
        setSearchBlogs(blogs)
    }, [blogs])

    let blogFormHandler = event => {
        event.preventDefault();
        const searchResult = blogs.filter(result => result.question.toLowerCase().includes(search.toLowerCase()))
        setSearchBlogs(searchResult)
    }

    return (
        <div>
            <form className='d-flex mb-5' onSubmit={blogFormHandler}>
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" name="search_blog" className='form-control' id="search_blog" />
                <button type="submit" className='btn btn-success'>Search</button>
            </form>
            {
                searchBlogs.length > 0 ? (
                    searchBlogs.map(item => (
                        <Blog key={item.id} item={item} />
                    ))
                ): <p className="text-danger"> No data found </p>
            }
        </div>
    );
};

export default Blogs;