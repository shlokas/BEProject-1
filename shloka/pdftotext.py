# import PyPDF2 
# import textract

# #write a for-loop to open many files -- leave a comment if you'd #like to learn how
# filename = 'pdftest.pdf' 
# #open allows you to read the file
# pdfFileObj = open(filename,'rb')
# #The pdfReader variable is a readable object that will be parsed
# pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
# #discerning the number of pages will allow us to parse through all #the pages
# num_pages = pdfReader.numPages
# count = 0
# text = ""
# #The while loop will read each page
# # while count < num_pages:
#     # pageObj = pdfReader.getPage(count)
#     # count +=1
#     # text += pageObj.extractText()

# pageObj = pdfReader.getPage(40)
# text += pageObj.extractText()

# print(text)
# #This if statement exists to check if the above library returned #words. It's done because PyPDF2 cannot read scanned files.
# if text != "":
#    text = text
# #If the above returns as False, we run the OCR library textract to #convert scanned/image based PDF files into text
# else:
#    text = textract.process(filename, method='tesseract', language='eng')
# # Now we have a text variable which contains all the text derived #from our PDF file. Type print(text) to see what it contains. It #likely contains a lot of spaces, possibly junk such as '\n' etc.



from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage
from io import BytesIO as StringIO

class PdfConverter:

   def __init__(self, file_path):
       self.file_path = file_path

   def convert_pdf_to_txt(self):
       rsrcmgr = PDFResourceManager()
       retstr = StringIO()
       codec = 'utf-8'  # 'utf16','utf-8'
       laparams = LAParams()
       device = TextConverter(rsrcmgr, retstr, codec=codec, laparams=laparams)
       fp = open(self.file_path, 'rb')
       interpreter = PDFPageInterpreter(rsrcmgr, device)
       password = ""
       maxpages = 0
       caching = True
       pagenos = set()
       for page in PDFPage.get_pages(fp, pagenos, maxpages=maxpages, password=password, caching=caching, check_extractable=True):
           interpreter.process_page(page)
       fp.close()
       device.close()
       str = retstr.getvalue()
       retstr.close()
       return str
   
   def save_convert_pdf_to_txt(self):
       content = self.convert_pdf_to_txt()
       txt_pdf = open('trial.txt', 'wb')
    #    txt_pdf.write(content.encode('utf-8'))
       txt_pdf.write(content)
       txt_pdf.close()
if __name__ == '__main__':
    pdfConverter = PdfConverter(file_path='pdftest.pdf')
    print(pdfConverter.save_convert_pdf_to_txt())