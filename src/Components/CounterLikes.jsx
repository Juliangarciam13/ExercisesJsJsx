import React, { useState } from 'react';

const LikeButton = ({ text1 = 'Like', text2 = 'DisLike' }) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleDislike = () => {
        setLikeCount(likeCount - 1);
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: '30px' }}>
                <button onClick={handleLike}>{text1}</button>
                <button onClick={handleDislike}>{text2}</button>
            </div>
            <p>{likeCount} likes</p>
        </div>
    );
};

export default LikeButton;