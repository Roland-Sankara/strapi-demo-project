import axios from 'axios';

const getAll = (url, params) => {
    return axios.get(`https://ghkproject.herokuapp.com/api/${url}/${params}`);
}

const getOne = (url, id) => {
    return axios.get(`https://ghkproject.herokuapp.com/api/${url}/${id}?populate=*`);
}

const getSlugged = (url, slug) => {
    console.log(`https://ghkproject.herokuapp.com/api/${url}?filters\[Slug\][$eq]=${slug}`);
    return axios.get(`https://ghkproject.herokuapp.com/api/${url}?filters\[Slug\][$eq]=${slug}`);
}


export {
    getAll,
    getOne,
    getSlugged
};