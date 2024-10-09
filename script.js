const output = document.getElementById("output");
const terminal = document.getElementById("terminal");
const text = `import os
import sys
import time
import h4ck

if os.path.isfile(h4ck.initialize):
    print("Initialized h4ck liberary!")
else:
    sys.exit("Failed to initialize h4ck liberary!")

def mainframe():
    if h4ck.malware("Rough").device == h4ck.pc:
        ransomware = h4ck.malware("Rough").ransomware
        start_time = time.time()
        while not time.time() >= start_time + 86400:
            while ransomware.transaction:
                print("Transfer in progress...")
                if ransomware.transaction.complete:
                    ransomware.destroy()
                    print(f"Hacking completed in {time.time()}!")
        if not ransomware.transaction.complete:
            ransomware.device.delete_all()
            print("Deleted data...")
            print(f"Hacking completed in {time.time()}!")

print("Initializing hack...")

def read_protocols():
    protocols = h4ck.get_all()
    document = None
    for item in protocols:
        if item == h4ck.wanted():
            print("Protocol found...")
            document = item
    if h4ck.contains(document, h4ck.firewalls):
        print("Bypassing firewalls...")
        firewalls = h4ck.find_all(h4ck.firewalls)
        for firewall in firewalls:
            h4ck.destroy_fw(firewall)
    print("Cracking security protocols...")
    return h4ck.read(document)

protocol = read_protocols()

def get_token(content):
    secret_token = h4ck.find_token(content)
    if secret_token in h4ck.database:
        return h4ck.database.get(secret_token)
    else:
        char_list = []
        for char in secret_token:
            if char in h4ck.char.not_identified:
                continue
            else:
                decrypted_char = h4ck.possibilities()
                char_list.append(char)
        while h4ck.decrypting:
            possible_token = h4ck.try_all(char_list)
            if h4ck.cracked:
                return possible_token

token = get_token(protocol)
storage_data = 0

def get_data(content, doc_token):
    document = h4ck.decrypt_with("token", doc_token, content)
    h4ck.hide(True)
    print("Hiding digital footprint...")
    sensitiveData = h4ck.find_sd(document)
    data_list = []
    print("Extracting sensitive data...")
    for sdata in sensitiveData:
        data_list.append(sdata)
    return data_list

data = get_data(protocol, token)

print("Uploading data to database...")
h4ck.upload(protocol, data)

print("Planting malware...")
crackedServer = h4ck.get_server(protocol)
h4ck.upload_to_server(crackedServer, token, h4ck.malware("Rough"))

while not h4ck.upload_finished:
    print("Uploading in progress...")

time.sleep(10)
if h4ck.positive:
    h4ck.duplicate_to_other_server(token, h4ck.malware("Rough"))
    while not h4ck.duplicate_finished:
        print("Duplicating in progress...")

if h4ck.malware("Rough").server == h4ck.web_server:
    web_server = h4ck.malware("Rough").server
    print("Overloading servers...")
    h4ck.ddos(web_server)

def bitcoin_check():
    if h4ck.user("self").exist:
        bitcoin_wallet = h4ck.user("self").bitcoin.address
        transaction = h4ck.bitcoin.transaction(bitcoin_wallet)
        if h4ck.positive(transaction):
            return bitcoin_wallet

if h4ck.malware("Rough").device == h4ck.pc:
    pc = h4ck.malware("Rough").device
    print("Uploading ransomware...")
    h4ck.upload_to_device(pc, h4ck.malware("Rough").ransomware, bitcoin_check())
    print("Demanding bitcoin payment...")
    
mainframe()
`;

let index = 0;
let startHeight = terminal.scrollHeight

document.addEventListener("keydown", function () {
    while (text[index] === ' ' || text[index] === '\n') {
        output.textContent += text[index];
        index++;
        if (output.scrollHeight + 30 >= startHeight) {
            terminal.scrollTop = output.scrollHeight - startHeight + 30;
        }
    }

    if (index < text.length) {
        output.textContent += text[index];
        index++;
    }
});
