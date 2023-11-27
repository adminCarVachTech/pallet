import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WarehousesIndexRoute extends Route {
    @service store;

    queryParams = {
        page: { refreshModel: true },
        limit: { refreshModel: true },
        sort: { refreshModel: true },
        query: { refreshModel: true },
        country: { refreshModel: true },
        name: { refreshModel: true },
        address: { refreshModel: true },
        public_id: { refreshModel: true },
        city: { refreshModel: true },
        phone: { refreshModel: true },
        neighborhood: { refreshModel: true },
        postal_code: { refreshModel: true },
        state: { refreshModel: true },
        createdAt: { refreshModel: true },
        updatedAt: { refreshModel: true },
    };

    model(params) {
        // return this.store.query('warehouse', { ...params, with: ['warehouse-section', 'warehouse-rack', 'warehouse-bin', 'warehouse-dock', 'warehouse-aisle', 'batch']});
        return this.store.query('warehouse', params)
    }
}
