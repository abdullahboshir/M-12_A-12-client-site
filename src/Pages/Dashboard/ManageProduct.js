import PartsInfo from '../../hooks/partsData';
import ManageProductUi from './ManageProductUi';

const ManageProduct = () => {

    const [partsData] = PartsInfo([])
  
    return (
        <div class="pt-8">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        partsData.map((parts, index) => <ManageProductUi
                            index={index}
                            key={parts._id}
                            parts={parts}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;