export let getUserSelector = (state: any) => state.users.items;
export let getPageNumberSelector = (state: any) => state.users.pageNumber;
export let getStatusSelector = (state: any) => state.users.status;
export let getPageSizeSelector = (state: any) => state.users.pageSize;
export let getTotalCountSelector = (state: any) => state.users.totalCount;
export let getCurrentPageSelector = (state: any) => state.users.currentPage;