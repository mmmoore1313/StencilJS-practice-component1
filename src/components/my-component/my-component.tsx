import { Component, Prop, h, Method, State } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() title: string;

  /**
   * The middle name
   */
  @Prop() content: string;
  @State() openModalState: boolean = false;

  @Method()
  openModal() {
    this.openModalState = true;
  }

  closeModal() {
    this.openModalState = false;
  }

  render() {
    if (!this.openModalState) {
      return (
        <div>
          {/*<button onClick={() => this.openModal()}>
            Open
          </button>*/}
        </div>
      )
    }
    return (
      <div class="backdrop-div">

        <div class="modal-div">
          <button onClick={() => this.closeModal()}>
            close
          </button>
          <h4 class="modal-header">
             {this.title}
          </h4>
          <h4>
            {this.content}
          </h4>
        </div>
      </div>
    );
  }
}
