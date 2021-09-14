class FilterServe {
    constructor(staticData = [], dynamicData = []) {
        this.manage = () => {
            this.inputData.db.filter((idb) => {
                idb.filterData.filter((idbfd) => {
                    this.inputData.client.map((idc) => {
                        if (idbfd == idc) {
                            this.outputData.raw.push(idb);
                        }
                    });
                });
            });
        };
        this.cleanedItUp = () => {
            return (this.outputData.cleaned = this.outputData.raw.filter((odr, k) => {
                return this.outputData.raw.indexOf(odr) === k;
            }));
        };
        this.inputData = {
            db: staticData,
            client: dynamicData,
        };
        this.outputData = {
            raw: [],
            cleaned: [],
        };
        this.manage();
        this.cleanedItUp();
    }
}
export { FilterServe };
