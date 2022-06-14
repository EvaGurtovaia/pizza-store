import React from "react";
import ContentLoader from "react-content-loader";
import "../scss/app.scss";

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#d1f0f5"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="121" cy="121" r="121" />
        <rect x="0" y="318" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="273" rx="10" ry="10" width="280" height="28" />
        <rect x="0" y="427" rx="10" ry="10" width="129" height="27" />
        <rect x="167" y="420" rx="19" ry="19" width="112" height="45" />
    </ContentLoader>
);

export default Skeleton;
