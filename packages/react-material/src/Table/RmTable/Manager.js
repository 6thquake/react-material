class Manager {
  constructor(columns, data){
    this.columns = columns
    this.data = data
  }
  _cached = {}
  first = true
  static instance(...args) {
    this.i = this.i || new this(...args)
    return this.i
  }

  syncPropsToState(){

  }

  set(){
    this.setColumns()
    this.setData()
  }

  setColumns(columns){
    if(this.first){
      this.columns = columns
      this.first = false
    }else{
      this.updateColumns(columns)
    }
  }

  updateColumns(columns) {
      this.columns.map((item, index)=> {
        item.title = columns.title
      })
  }

  setData(data){
    this.data = data
  }
  
  changed(columns, data){    
    if (this._cached.columns !== columns) {
      this._cached.columns = columns
      this.setColumns(columns)
      return true
    }
    return false
  }
}

export default Manager