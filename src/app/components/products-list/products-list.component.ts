import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  currentStatus: string;
  productDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur dolore ducimus facilis fugiat harum inventore laborum natus, odit perferendis porro quis quo sed. Commodi consectetur dolor esse est facere illum minima molestias quas. Accusamus amet blanditiis, corporis dicta dolorum earum enim eveniet facere fuga illo, laudantium maxime natus nesciunt odio optio, provident repellat reprehenderit repudiandae sint sunt tempora velit voluptatem voluptates. At dolorem, enim est eum laborum, modi nobis non provident recusandae soluta tenetur unde vitae. Doloribus id ipsam necessitatibus perferendis voluptatem? Alias assumenda cupiditate eligendi exercitationem natus qui, recusandae sint suscipit tempora voluptatem. Aspernatur distinctio ipsum officiis? Consectetur corporis, delectus dicta dolorum error ex in incidunt ipsam maiores, nemo placeat, porro quae qui quo repellat sequi temporibus ullam velit vero voluptates. Ab animi commodi culpa dolore dolorem dolores, ipsum, laudantium modi molestias mollitia nemo nesciunt non quam qui quod repudiandae sint soluta tempore ullam ut vel veniam, voluptatem voluptates. A accusantium architecto eligendi error id iure minus sapiente tempore vel velit? A corporis ducimus, eaque earum eius eos fugit illum incidunt, libero natus numquam perspiciatis, porro provident quam qui quisquam quo quod ratione sed similique tempora unde veritatis voluptatibus. Aliquid asperiores fugit perferendis unde! Dolores fugiat molestias nesciunt praesentium quas! Doloremque dolores ducimus, fuga neque praesentium quae? Asperiores atque cum distinctio earum et facilis fugit modi molestias, nam nesciunt officia placeat praesentium sint tempora tempore veniam, veritatis voluptas. Ab accusamus aspernatur beatae blanditiis commodi consectetur delectus dicta dolorem, eaque earum eos expedita fugit id laudantium magni minima molestias nemo nihil nobis non odio odit omnis perspiciatis placeat praesentium, quasi qui quod sequi vel voluptatem! Ipsum laudantium maxime neque nihil nostrum officiis porro ratione recusandae repellendus voluptatibus. Aperiam consectetur corporis eaque eos laboriosam laudantium maiores, odit porro, quam rem tempora veritatis voluptatem voluptatum. Consectetur dolores ipsa quia quod repudiandae.';

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.dataStore.getStatus().subscribe(status => this.currentStatus = status);
  }

  ngAfterViewInit() {

  }

  setNewStatus(status) {
    this.dataStore.setStatus(status);
  }
}
