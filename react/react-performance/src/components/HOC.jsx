import React from 'react'

// creating the HOC : adds loading functionality to any component.

const withLoading = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.props = props;
            this.state = { loading: true }
        }

        componentDidMount = () => {
            // simulating api call & results...
            setTimeout(() => {
                this.setState({ loading: false })
            }, 2000)
        }

        render() {
            if (this.state.loading) {
                return <div>Data Loading...</div>
            }

            return <WrappedComponent {...this.props} />
        }

    }
}

export default withLoading