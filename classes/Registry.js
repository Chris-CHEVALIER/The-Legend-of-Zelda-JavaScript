import Entity from './Entity'

class Registry {
  constructor () {
    this.numberOfEntities = 0
    this.entitiesToBeAdded = []
    this.systems = {}
  }

  createEntity = components => {
    const newEntity = new Entity(this.numberOfEntities++, this)
    let newEntityComponents = {}

    for (let i = 0; i < components.length; i++) {
      const component = components[i]
      switch (component['name']) {
        case 'Position': {
          const componentObj = component['value']
          newEntityComponents['Position'] = new PositionComponent(
            component['name'],
            componentObj
          )
          break
        }
        case 'Movement': {
          const componentObj = component['value']
          newEntityComponents['Movement'] = new MovementComponent(
            component['name'],
            componentObj
          )
          break
        }
        default:
          break
      }
    }
    newEntity.components = newEntityComponents;
    this.entitiesToBeAdded.push(newEntity)

    return newEntity
  }
}
