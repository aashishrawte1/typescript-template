import express from 'express'

export const starterApi_up = (request: express.Request, response: express.Response) => {
    const query = request.query;
    console.log(query);
}