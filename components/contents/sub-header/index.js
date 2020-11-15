export const getSubHeader = totalCount => `
    <div id="sub-header">
        <button>
            <span>Overview</span>
        </button>
        <button class="active">
            <span class="description">Repositories</span>
            <div class="count">${totalCount}</div>
        </button>
        <button>
            <span>Projects</span>
        </button>
        <button>
            <span>Packages</span>
        </button>
    </div>
`