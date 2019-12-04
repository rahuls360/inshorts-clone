import React from 'react';
import {connect} from 'react-redux';

// Icons
import {AiTwotoneLike} from 'react-icons/ai';
import {AiOutlineLike} from 'react-icons/ai';
import {AiTwotoneDislike} from 'react-icons/ai';
import {AiOutlineDislike} from 'react-icons/ai';
import {MdFavorite} from 'react-icons/md';
import {MdFavoriteBorder} from 'react-icons/md';

const Card = ({ id, title, description, image, tags, likeNews, bookmarkNews, dislikeNews }) => {
    return (
        <div className="card-container">
            <img src={image} alt={title} />
            <div className="content">
                <h3>{title}</h3>
                <span>{tags.join(' | ')}</span>
                <p>{description}</p>
                <div className="interactions">
                    <AiOutlineLike onClick={() => likeNews(id)} color="grey" size="2em"/>
                    <MdFavoriteBorder onClick={() => bookmarkNews(id)} color="grey" size="2em"/>
                    <AiOutlineDislike onClick={() => dislikeNews(id)} color="grey" size="2em"/>
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