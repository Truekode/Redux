import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({syncPosts}) => {
    if (!syncPosts) {
        return <p className="text-center">Постов нет</p>
    }
    return syncPosts.map(p => <Post post={p} key={p.id}/>);
};

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    };
}

export default connect(mapStateToProps, null)(Posts)
