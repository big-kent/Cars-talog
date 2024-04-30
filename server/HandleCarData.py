import pandas as pd

# Load the CSV file
file_path = 'all-vehicles-model.csv'
data = pd.read_csv(file_path, delimiter=';')

# Selecting and renaming columns
columns_to_keep = {
    'Make': 'Make',
    'Model': 'Model',
    'City Mpg For Fuel Type1': 'City Mpg',
    'Highway Mpg For Fuel Type1': 'Highway Mpg',
    'Annual Fuel Cost For Fuel Type1': 'Annual Fuel Cost',
    'Co2 Fuel Type1': 'CO2 Emission', 
    'Year': 'Year',
    'Cylinders': 'Cylinders',
    'Drive': 'Drive',
    'Vehicle Size Class': 'Vehicle Class',
    'Engine descriptor': 'Engine Descriptor',
    'Fuel Type': 'Fuel Type',
    'Fuel Type1': 'Fuel Type1',
    'MPG Data': 'MPG Data',
    'Transmission': 'Transmission',
    'PHEV Blended': 'PHEV Blended'
}

# Verify column names and select data
try:
    selected_data = data[list(columns_to_keep.keys())]
    selected_data.rename(columns=columns_to_keep, inplace=True)
except KeyError as e:
    print(f"Column not found: {e}")

# Save the processed data to a new CSV file
new_file_path = 'vehicles-processed-full.csv'
selected_data.to_csv(new_file_path, index=False)

print("Processed data saved successfully to", new_file_path)
