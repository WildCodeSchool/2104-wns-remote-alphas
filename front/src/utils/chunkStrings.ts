const chunkSubstr = (str:string, size: number):string[] => {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);

    // eslint-disable-next-line no-plusplus
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = str.substr(o, size);
    }

    return chunks;
};

export default chunkSubstr;
