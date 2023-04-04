class Entity {
    constructor(id, registry) {
        this.id = id
        this.registry = registry
        this.components = {}
    }
}

export default Entity;