import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// Icons
import {AiOutlineLike} from 'react-icons/ai';
import {AiOutlineDislike} from 'react-icons/ai';
import {MdFavoriteBorder} from 'react-icons/md';

const Card = ({ id, title, description, image, tags, likeNews, bookmarkNews, dislikeNews, likes, dislikes, bookmarks }) => {

        return (
            <div className="card-container">
                <img src={image} alt={title} />
                <div className="content">
                    <h3><Link to={`/news/${id}`}>{title}</Link></h3>
                    <span>{tags.join(' | ')}</span>
                    <p>{description}</p>
                    <div className="interactions">
                        <AiOutlineLike onClick={() => likeNews(id)} color={likes.includes(id) ? "green" : "grey"} size="2em"/>
                        <MdFavoriteBorder onClick={() => bookmarkNews(id)} color={bookmarks.includes(id) ? "orange" : "grey"} size="2em"/>
                        <AiOutlineDislike onClick={() => dislikeNews(id)} color={dislikes.includes(id) ? "red" : "grey"} size="2em"/>
                    </div>
                </div>
            </div>
        );
}

const mapStateToProps = state => ({
    likes: state.likes,
    dislikes: state.dislikes,
    bookmarks: state.bookmarks,
});

const mapDispathToProps = dispatch => ({
    likeNews: (id) => dispatch({ type: "LIKE", data: id}),
    dislikeNews: (id) => dispatch({ type: "DISLIKE", data: id}),
    bookmarkNews: (id) => dispatch({ type: "BOOKMARK", data: id}),
})

export default connect(mapStateToProps, mapDispathToProps)(Card);