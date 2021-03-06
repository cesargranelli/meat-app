import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { AboutComponent } from './about/about.component';
export var ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantsDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ] },
    { path: 'about', component: AboutComponent }
];
//# sourceMappingURL=app.routes.js.map