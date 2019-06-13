class ModuleData: 
    def __init__(self, moduleNo, topics, hours):
        self.moduleNo = moduleNo
        self.topics = topics
        self.hours = hours 

def main():
    import pandas
    import re
    df = pandas.read_csv('output.csv')
    res = df.transpose()
    ind = res.apply(pandas.Series.last_valid_index)
    syllabusTopics = []
    count = 0
    for i in range(len(df)) : 
        #print(df.iloc[i, 0], df.iloc[i, 2])         
        count += 1
        if pandas.notna(df.iloc[i,2]):
            mat = re.search("^\d(\.)\d", df.iloc[i,2])
            if mat:
                mod = df.iloc[i,2]
                df.iloc[i,3] = re.sub(r'\xe2\x80\x93','-', df.iloc[i,3]  )
                df.iloc[i,3] = re.sub(r'\n',' ', df.iloc[i,3]  )
                top = re.split(',',df.iloc[i,3])
                t = ind[i]
                hr = res.loc[t,i]
                # print(count)
                # print(mod)
                # print(top)
                # print(hr)
                syllabusTopics.append(ModuleData(mod, top, hr))

    # access array of obj by index and property name BOTH , eg below
    print syllabusTopics[9].hours    


if __name__ == "__main__":
    main()
