class Database<T>{
    entrys : T[] = []

    addEntry(entry : T){
        this.entrys.push(entry);
    }
    
    getAllEntries(): T[]{
        return this.entrys
    }
}