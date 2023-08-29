require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Food & Beverage', sortOrder: 10},
    {name: 'Pantry', sortOrder: 20},
    {name: 'Household Products', sortOrder: 30},
    {name: 'Personal Care', sortOrder: 40},
    {name: 'Sale', sortOrder: 50},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'Cherry Tomatoes', image: 'https://picsum.photos/200', category: categories[0], price: 5.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Chicken', image: 'https://picsum.photos/200', category: categories[0], price: 6.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Courgette', image: 'https://picsum.photos/200', category: categories[0], price: 3.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Salad', image: 'https://picsum.photos/200', category: categories[0], price: 4.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Crakers', image: 'https://picsum.photos/200', category: categories[0], price: 3.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Honey', image: 'https://picsum.photos/200', category: categories[1], price: 5.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Chocolate', image: 'https://picsum.photos/200', category: categories[1], price: 7.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Biscuits', image: 'https://picsum.photos/200', category: categories[1], price: 4.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Olive Oil', image: 'https://picsum.photos/200', category: categories[1], price: 8.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Floor Cleaner', image: 'https://picsum.photos/200', category: categories[2], price: 3.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Dishwasher Tablets', image: 'https://picsum.photos/200', category: categories[2], price: 8.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'All Purpose Spray', image: 'https://picsum.photos/200', category: categories[2], price: 3.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Sponges', image: 'https://picsum.photos/200', category: categories[2], price: 4.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Tootpaste', image: 'https://picsum.photos/200', category: categories[3], price: 5.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Shampoo', image: 'https://picsum.photos/200', category: categories[3], price: 8.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Deodorant', image: 'https://picsum.photos/200', category: categories[3], price: 6.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Hand Cream', image: 'https://picsum.photos/200', category: categories[3], price: 10.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Aubergeen', image: 'https://picsum.photos/200', category: categories[4], price: 3.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Coffee', image: 'https://picsum.photos/200', category: categories[4], price: 5.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Soap', image: 'https://picsum.photos/200', category: categories[4], price: 2.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Beer', image: 'https://picsum.photos/200', category: categories[4], price: 13.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
    {name: 'Wine', image: 'https://picsum.photos/200', category: categories[4], price: 17.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mollis enim nec imperdiet. Ut pharetra molestie libero, ut lacinia erat maximus id. Curabitur hendrerit nisl vitae lorem tempus vehicula. Fusce finibus nec nunc nec sollicitudin. Fusce nec nisl lacus. Suspendisse ex tellus, ultrices eu efficitur eu, tempor nec lacus. Cras ut felis non ex ornare mattis et ut velit.'},
  ]);
  process.exit();

  console.log(products);

})();