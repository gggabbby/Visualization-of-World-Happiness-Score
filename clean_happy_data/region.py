import pandas as pd 

region_name = ["Western Europe","North America","Middle East and Northern Africa",
                "Eastern Asia", "Sub-Saharan Africa"]

all_data = pd.read_excel("all_data.xlsx")
all_data.set_index("Region", inplace = True)

region_5 = all_data.loc[region_name] 
region_5.to_csv("region_5.csv")

