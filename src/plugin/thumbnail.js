module.exports = async ({ src, dest, item }) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(item);
        } catch (err) {
            reject(err);
        }
    });
}
