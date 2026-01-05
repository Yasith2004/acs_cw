import { render, act, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FavouritesProvider, useFavourites } from '../context/FavouritesContext';
import PropertyCard from '../components/PropertyCard';
import PropertyTab from '../components/PropertyTab';
import Search from '../pages/Search';

// Mock the properties data for Search filtering tests
jest.mock('./data/properties.json', () => ({
    properties: [
        {
            id: 'prop1',
            type: 'House',
            price: 750000,
            bedrooms: 3,
            location: 'Petts Wood',
            added: { year: 2022, month: 'October', day: 12 },
            picture: ['/img1.jpg'],
            shortDescription: 'House 1'
        },
        {
            id: 'prop2',
            type: 'Apartment',
            price: 400000,
            bedrooms: 2,
            location: 'Orpington',
            added: { year: 2022, month: 'September', day: 14 },
            picture: ['/img2.jpg'],
            shortDescription: 'Apartment 1'
        }
    ]
}));

// ---1. FavouritesContext Tests ---
const FavTestComponent = () => {
    const { favourites, toggleFavourite } = useFavourites();
    return (
        <div>
            <div data-testid="fav-count">{favourites.length}</div>
            <button data-testid="toggle-btn" onClick={() => toggleFavourite({ id: 'prop1' })}>Toggle</button>
        </div>
    );
};

describe('Favourites Management', () => {
    test('adds and removes a property from favourites', () => {
        const { getByTestId } = render(
            <FavouritesProvider>
                <FavTestComponent />
            </FavouritesProvider>
        );

        const toggleBtn = getByTestId('toggle-btn');
        const favCount = getByTestId('fav-count');

        expect(favCount.textContent).toBe('0');
        act(() => { toggleBtn.click(); });
        expect(favCount.textContent).toBe('1');
        act(() => { toggleBtn.click(); });
        expect(favCount.textContent).toBe('0');
    });
});

// ---2. PropertyCard Tests ---
describe('PropertyCard Component', () => {
    const mockProps = [{
        id: 'p1', type: 'House', price: 500000, location: 'London',
        added: { year: 2023, month: 'Jan', day: 1 }, picture: ['/p.jpg'], shortDescription: 'Nice'
    }];

    test('renders property details correctly', () => {
        render(
            <MemoryRouter>
                <FavouritesProvider>
                    <PropertyCard properties={mockProps} />
                </FavouritesProvider>
            </MemoryRouter>
        );
        expect(screen.getByText('£500000')).toBeInTheDocument();
        expect(screen.getByText('London')).toBeInTheDocument();
    });
});

// ---3. PropertyTab Tests ---
describe('PropertyTab Component', () => {
    const mockProp = { description: 'Desc', floorPlan: ['/f.jpg'], location: 'Loc' };

    test('switches content when clicking tabs', () => {
        render(<PropertyTab property={mockProp} />);
        expect(screen.getByText('Desc')).toBeInTheDocument();

        fireEvent.click(screen.getByText('🏠 Floor Plan'));
        expect(screen.getByAltText('floor plan')).toBeInTheDocument();
        expect(screen.queryByText('Desc')).not.toBeInTheDocument();
    });
});

// --- Search Filtering Tests ---
describe('Search Filtering Logic', () => {
    // ---4. Mock the properties data for Search filtering tests ---
    jest.mock('../data/properties.json', () => ({
        properties: [
            {
                id: 'prop1',
                type: 'House',
                price: 750000,
                bedrooms: 3,
                location: 'Petts Wood',
                added: { year: 2022, month: 'October', day: 12 },
                picture: ['/img1.jpg'],
                shortDescription: 'House 1'
            },
            {
                id: 'prop2',
                type: 'Apartment',
                price: 400000,
                bedrooms: 2,
                location: 'Orpington',
                added: { year: 2022, month: 'September', day: 14 },
                picture: ['/img2.jpg'],
                shortDescription: 'Apartment 1'
            }
        ]
    }));

    // ---5. Test filters by property type ---
    test('filters by property type', () => {
        render(
            <MemoryRouter>
                <FavouritesProvider>
                    <Search />
                </FavouritesProvider>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText('Property Type'), { target: { value: 'Apartment' } });
        fireEvent.click(screen.getByRole('button', { name: /Search Properties/i }));

        expect(screen.getAllByRole('link')).toHaveLength(1);
        expect(screen.getByText('Apartment 1')).toBeInTheDocument();
    });

    test('filters by price range', () => {
        render(
            <MemoryRouter>
                <FavouritesProvider>
                    <Search />
                </FavouritesProvider>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText('Max Price (£)'), { target: { value: '500000' } });
        fireEvent.click(screen.getByRole('button', { name: /Search Properties/i }));

        expect(screen.getAllByRole('link')).toHaveLength(1);
        expect(screen.getByText('Apartment 1')).toBeInTheDocument();
    });

    test('resets filters correctly', () => {
        render(
            <MemoryRouter>
                <FavouritesProvider>
                    <Search />
                </FavouritesProvider>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText('Property Type'), { target: { value: 'Apartment' } });
        fireEvent.click(screen.getByRole('button', { name: /Search Properties/i }));
        expect(screen.getAllByRole('link')).toHaveLength(1);

        fireEvent.click(screen.getByRole('button', { name: /Clear/i }));
        expect(screen.getAllByRole('link')).toHaveLength(2);
    });
});
