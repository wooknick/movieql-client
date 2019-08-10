import React from "react";

import { Query } from "react-apollo";

const Detail = ({ match }) => {
    console.log(match);
    return <div>{match.params.movieId}</div>;
};

export default Detail;
