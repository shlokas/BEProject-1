import pdftables_api

c = pdftables_api.Client('62cjalkbkgj6')
c.csv('pdf3-pages-5-6.pdf', 'output') 
#replace c.xlsx with c.csv to convert to CSV
#replace c.xlsx with c.xml to convert to XML
#replace c.xlsx with c.html to convert to HTML