import React from 'react';
import Card from '../Components/DestinationCard';
import destinations from '../Data/Destination';

function AboutNepal() {
  return (
    <div className="container mx-auto py-5">
      <h2 className="text-3xl font-bold mb-4">About Nepal</h2>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">History</h3>
        <p className="text-gray-700">
          Nepal, a landlocked country in South Asia, has a rich history that dates back thousands of years. It is known for its ancient culture, diverse ethnic groups, and historical landmarks. The country was unified in the 18th century by King Prithvi Narayan Shah, and it has since maintained its sovereignty despite various challenges.
        </p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Culture</h3>
        <p className="text-gray-700">
          Nepal's culture is a blend of various traditions and customs from different ethnic groups. The country is known for its festivals, music, dance, art, and cuisine. Major festivals include Dashain, Tihar, and Holi, which are celebrated with great enthusiasm. The traditional music and dance forms, such as the Newari dance and the folk songs of the Terai region, reflect the cultural diversity of Nepal.
        </p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Geography</h3>
        <p className="text-gray-700">
          Nepal is renowned for its stunning geography, which includes the majestic Himalayas, lush valleys, and diverse ecosystems. The country is home to eight of the world's fourteen highest peaks, including Mount Everest, the highest point on Earth. The Terai region in the south features fertile plains, while the mid-hills are characterized by terraced fields and picturesque villages.
        </p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Landmarks and Nature</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map(destination => (
            <Card
              key={destination.id}
              image={destination.image}
              title={destination.name}
              description={`${destination.type} - ${destination.region}`}
              rating={destination.rating}
            />
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Popular Travel Activities</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Trekking:</strong> Nepal is famous for its trekking routes, including the Everest Base Camp trek, Annapurna Circuit, and Langtang Valley trek.</li>
          <li><strong>Cultural Exploration:</strong> Visitors can explore ancient temples, palaces, and UNESCO World Heritage Sites in Kathmandu, Bhaktapur, and Patan.</li>
          <li><strong>Mountaineering:</strong> Nepal offers numerous opportunities for mountaineering, with peaks like Everest, Lhotse, and Makalu attracting climbers from around the world.</li>
          <li><strong>Wildlife Safari:</strong> The Chitwan National Park and Bardia National Park provide thrilling wildlife safaris where visitors can spot rhinos, tigers, and various bird species.</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutNepal;