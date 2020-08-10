import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  // an anonymous class because it's only returned. It's a class 'factory'
  return class extends Component {
    // initial error status
    state = {
      error: null,
    };

    componentWillMount() {
      // clears any errors when a new request is sent
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        // so that requests can contine
        return req;
      });
      // handles error in the axios response
      // res is also return so that responses can continue
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    // to clean up interceptors to prevent memory leaks
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    // when click is registered on the modal
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
