import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
   const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='flex flex-col gap-8 mb-10'>
            <img className='w-full
            ' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={ () => handleAddToBookmark (blog)} className='text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {hashtags.map((hash, index) => <span key={index}><a href="">#{hash}</a></span>)}

            </p>

            <button onClick={ () => handleMarkAsRead(reading_time)} className='text-left text-purple-600 font-bold underline'>Mark as Read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;