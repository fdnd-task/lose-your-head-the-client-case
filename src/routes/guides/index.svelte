<!-- <script context="module">
    export async function load({load}) {
        const response = fetch('https://cmda-mid-term.prismic.io/api/v2/documents/search?ref=YzXRRBEAALVOp-Jj&src=apibrowser#format=html');
        const guides = await (await response).json()

        if (response.ok) {
            return {
                props: {
                    guides
                }
            }
        }

        return {
           status: Response.status,
           Error: new Error('Could not fetch teh guides')
        }
    }
</script>  -->