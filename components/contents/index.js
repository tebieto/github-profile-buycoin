import { getContentRight } from './right-contents/index.js';
import { getContentLeft } from './left-contents/index.js';
import { getSubHeader } from './sub-header/index.js';

export const getPageContents = data => `
    <div id="contents">
        ${
            // left-contents first
            getContentLeft(data.userInfo)
        }

        ${
            // sub-header next
            getSubHeader(data.totalCount)
        }

        ${
            // right-content finally
            getContentRight(data.repos)
        }
    </div>
`