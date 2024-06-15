import PropTypes from 'prop-types'; 

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    return (
        <div className='flex flex-col rounded-md m-4 bg-slate-200 p-4 '>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;