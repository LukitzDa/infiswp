const filePath = "../nmap-datenfiles";
try
{
    const dirEntries = await Deno.readDir(filePath);
    for await (const dirEntry of dirEntries)
    {
        console.log(dirEntry.name);
    }
    const data = await Deno.readTextFile(filesLocation);
    const lines = data.split("\n");
    console.log(lines);
} catch (err) {
    console.error("Error reading the file:", err);
}