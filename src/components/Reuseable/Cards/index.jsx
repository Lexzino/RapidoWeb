import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CardComponent = ({ blog }) => {
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };
    return (
        <Card
            style={{ width: '100%' }}
            cover={<img alt={blog.title} src={blog.mainImage.asset.url} />}
        >
            <Link to={`/blog/${blog.slug.current}`}>
                <div className="px-4">
                    <div className="pt-5 primary-color">{formatDate(blog._createdAt)}</div>
                    <Meta className="pb-5 pt-3" title={blog?.title} />
                </div>
            </Link>
        </Card>
    );
};

export default CardComponent;
