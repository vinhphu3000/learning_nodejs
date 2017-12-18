import reactor from './reactor'
import ProductStore from './stores/ProductStore'
import CartStore from './stores/CartStore'

reactor.registerStores({
    'products': ProductStore,
    'cart': CartStore
})