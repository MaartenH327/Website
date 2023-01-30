import pdfkit
import os
print(os)
css = 'C:/Portfolio-Website/Website/style.css'
with open('C:/Portfolio-Website/Website/CV.html') as f:
    pdfkit.from_file(f, 'out.pdf', css=css)

