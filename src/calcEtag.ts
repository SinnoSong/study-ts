import * as fs from 'fs';
import * as crypto from 'crypto';

/**
 * Calculate the ETag for a given file.
 * @param inputFile The path to the input file.
 * @param partSize The size of each part in bytes (default is 5MB).
 * @returns The ETag of the file.
 */
function calcEtag(inputFile: string, partSize: number = 5242880): string {
    const md5Digests: Buffer[] = [];
    const fileBuffer = fs.readFileSync(inputFile);
    let start = 0;

    while (start < fileBuffer.length) {
        const end = Math.min(start + partSize, fileBuffer.length);
        const chunk = fileBuffer.slice(start, end);
        const md5 = crypto.createHash('md5');
        md5.update(chunk);
        md5Digests.push(md5.digest());
        start = end;
    }

    const finalMd5 = crypto.createHash('md5');
    md5Digests.forEach(digest => finalMd5.update(digest));
    return `${finalMd5.digest('hex')}-${md5Digests.length}`;
}

// Example usage
const etag = calcEtag('/mnt/c/Users/sinno/Music/Beyond+-+海阔天空.flac');
console.log(`ETag: ${etag}`);
