const gotPost = async (req, res)=>{
    console.error("/n/n");
    console.log(req.query);
    console.error("/n/n");

    return res.status(200).send("Successfully Received WEB API CALL");
}

module.exports = {
    gotPost
};