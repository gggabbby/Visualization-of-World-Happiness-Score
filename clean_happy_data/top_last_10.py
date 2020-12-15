import pandas as pd 

top_name = ["Finland","Denmark","Norway","Iceland","Netherlands",
        "Switzerland","Sweden","New Zealand","Canada","Austria"]

last_name = ["Haiti","Botswana","Syria","Malawi","Yemen","Rwanda",
        "Tanzania","Afghanistan","Central African Republic","South Sudan"]

all_data = pd.read_excel("all_data.xlsx")
all_data.set_index("Country", inplace = True)

top_10 = all_data.loc[top_name] 
top_10.to_csv("top_10.csv")

last_10 = all_data.loc[last_name] 
last_10.to_csv("last_10.csv")
# print(top_last_10)
