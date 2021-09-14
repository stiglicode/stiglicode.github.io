interface PostTypes {
  usedLangs: string;
  fileData: number[];
  title: string;
  est: string;
  img: string;
  contentText: string;
  id: number;
}
class FilterServe {
  private inputData: {
    db: PostTypes[];
    client: number[];
  };
  public outputData: {
    raw: PostTypes[];
    cleaned: PostTypes[];
  };
  private constructor(staticData: PostTypes[] = [], dynamicData: number[] = []) {
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
  manage = () => {
    this.inputData.db.filter((idb: any) => {
      idb.filterData.filter((idbfd) => {
        this.inputData.client.map((idc) => {
          if (idbfd == idc) {
            this.outputData.raw.push(idb);
          }
        });
      });
    });
  };
  cleanedItUp = () => {
    return (this.outputData.cleaned = this.outputData.raw.filter((odr, k) => {
      return this.outputData.raw.indexOf(odr) === k;
    }));
  };
}

export { FilterServe };
