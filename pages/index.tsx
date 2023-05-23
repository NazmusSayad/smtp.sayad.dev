export default () => <> </>
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/api',
      permanent: false,
    },
  }
}
