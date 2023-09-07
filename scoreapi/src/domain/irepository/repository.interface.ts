interface IRepository{
    find(query: Object);
    findBy(query: Object);
    increment(key: Object, column, value);
    delete(id: number);
    update(id: number, data: Object);
    save(entity: Object);
}
export default IRepository;